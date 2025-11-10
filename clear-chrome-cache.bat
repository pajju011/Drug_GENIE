@echo off
echo ============================================
echo  CLEARING CHROME CACHE FOR LOCALHOST
echo ============================================
echo.
echo Instructions:
echo 1. Close Chrome completely (all windows)
echo 2. Press any key to continue...
pause > nul

echo.
echo Clearing Chrome cache...
taskkill /F /IM chrome.exe 2>nul
timeout /t 2 /nobreak > nul

rd /s /q "%LOCALAPPDATA%\Google\Chrome\User Data\Default\Cache" 2>nul
rd /s /q "%LOCALAPPDATA%\Google\Chrome\User Data\Default\Code Cache" 2>nul
rd /s /q "%LOCALAPPDATA%\Google\Chrome\User Data\Default\Service Worker" 2>nul

echo.
echo ============================================
echo  Chrome cache cleared!
echo  Now open Chrome and go to localhost:5173
echo  You will see the HeartHandshake icon!
echo ============================================
echo.
pause
