@echo off
echo Dojo Build Begins:
build.sh -d ./cordova/www
echo Dojo Build Ends
echo Cordova Build Begins:
#cordova build
"C:\Program Files\7-Zip\7z.exe" a -tzip -r propertyCrossDojo-src-phoneGap .\cordova\www\*.*
echo Cordova Build Ends
echo Done
echo Ready to package for PhoneGap Build
pause

pause