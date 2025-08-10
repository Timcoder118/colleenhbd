@echo off
echo 正在配置Git...
"C:\Program Files\Git\bin\git.exe" config --global user.email "timcoder118@gmail.com"
"C:\Program Files\Git\bin\git.exe" config --global user.name "Timcoder118"

echo 正在提交文件...
"C:\Program Files\Git\bin\git.exe" commit -m "Initial commit: Daily Wisdom Website"

echo 正在设置主分支...
"C:\Program Files\Git\bin\git.exe" branch -M main

echo 正在添加远程仓库...
"C:\Program Files\Git\bin\git.exe" remote add origin https://github.com/Timcoder118/colleenhbd.git

echo 正在上传到GitHub...
"C:\Program Files\Git\bin\git.exe" push -u origin main

echo 完成！
pause
