#!/usr/bin/env bash

set -e

# Base directory for this entire project
BASEDIR=$(cd $(dirname $0) && pwd)

# Source directory for unbuilt code
SRCDIR="$BASEDIR/src"

# Directory containing dojo build utilities
TOOLSDIR="$SRCDIR/util/buildscripts"

# Destination directory for built code
DISTDIR="$BASEDIR/dist"

# Module ID of the main application package loader configuration
LOADERMID="app/run"

# Main application package loader configuration
LOADERCONF="$SRCDIR/$LOADERMID.js"

# Main application package build configuration
PROFILE="$BASEDIR/profiles/app.profile.js"

# Take optional command line arguments in account

while [ "$1" != "" ]; do
  if [ "$2" != "" ]; then
    case $1 in
      -d )
        DISTDIR="$(cd $(dirname $0) && mkdir -p $2 && cd $2 && pwd)"
        ;; 

      -s )
        SRCDIR="$2"
        ;;

      -t )
        TOOLSDIR="$2"
        ;;

      -c)
        LOADERCONF="$2"
        ;;

      -p)
        PROFILE="$2"
        ;;

    esac
    shift 2
  else 
    case $1 in 
      -h |--help )
        echo "Available options :"
        echo "-d DISTDIR    Destination directory for built code"
        echo "-s SRCDIR     Source directory for unbuilt code"
        echo "-t TOOLSDIR   Directory containing dojo build utilities"
        echo "-c LOADERCONF Main application package loader configuration"
        echo "-p PROFILE    Main application package build configuration"
        exit
        ;;
    esac
    shift 1
  fi
done

# Configuration over. Main application start up!

if [ ! -d "$TOOLSDIR" ]; then
	echo "Can't find Dojo build tools -- did you initialise submodules? (git submodule update --init --recursive)"
	exit 1
fi

echo "Building application with $PROFILE to $DISTDIR."

echo -n "Cleaning old files..."
rm -rf "$DISTDIR"
echo " Done"

cd "$TOOLSDIR"

if which node >/dev/null; then
	node ../../dojo/dojo.js load=build --require "$LOADERCONF" --profile "$PROFILE" --releaseDir "${DISTDIR}" $@
elif which java >/dev/null; then
	java -Xms256m -Xmx256m  -cp ../shrinksafe/js.jar:../closureCompiler/compiler.jar:../shrinksafe/shrinksafe.jar org.mozilla.javascript.tools.shell.Main  ../../dojo/dojo.js baseUrl=../../dojo load=build --require "$LOADERCONF" --profile "$PROFILE" --releaseDir "$DISTDIR" $@
else
	echo "Need node.js or Java to build!"
	exit 1
fi

cd "$BASEDIR"

LOADERMID=${LOADERMID//\//\\\/}

# Copy & minify index.html to dist
cat "$SRCDIR/index.html" | tr '\n' ' ' | \
perl -pe "
  s/<\!--.*?-->//g;                          # Strip comments
  s/isDebug: *1/deps:['$LOADERMID']/;        # Remove isDebug, add deps
  s/<script src=\"$LOADERMID.*?\/script>//;  # Remove script app/run
  s/\s+/ /g;                                 # Collapse white-space" > "$DISTDIR/index.html"

# Remove useless framework files
find ${DISTDIR}/dojo -mindepth 1 -type d -exec rm -rf {} +
find ${DISTDIR}/dojo -type f ! -name dojo.js -exec rm -f {} +
find ${DISTDIR}/app -name *.js.uncompressed.js -exec rm -f {} +
find ${DISTDIR}/app -name *.js.map -exec rm -f {} +
find ${DISTDIR}/app -name *.js.consoleStripped.js -exec rm -f {} +

rm -rf "${DISTDIR}/dojox"
rm -rf "${DISTDIR}/dijit"
rm -f "${DISTDIR}/build-report.txt"
echo "Build complete"
