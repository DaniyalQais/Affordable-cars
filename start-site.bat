@echo off
cd /d "%~dp0"
echo Building Motorx...
call npm run build
if errorlevel 1 (
    echo Build failed.
    pause
    exit /b 1
)
echo.
echo Starting at http://localhost:3000
echo Press Ctrl+C to stop.
call npm start
