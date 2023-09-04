#!/bin/bash 

usage() {
    echo "Usage: $0 <hash path> <version>
Example : $0 e829be46431d9d5c061068a9b704357be77f6617  1.2.76
    "
    exit 1
}

# 检查脚本参数数量
if [ "$#" -ne 2 ]; then
    usage
fi



# 第一个参数为版本号
hash_path=$1
server_version=$2


linux_download() {
    linux_url="https://ghproxy.com/https://github.com/Exafunction/codeium/releases/download/language-server-v$server_version/language_server_linux_x64.gz"

    # 如果localpath所处目录不存在，那么创建目录
    save_path="$HOME/.vscode-server/extensions/codeium.codeium-$server_version/dist/$hash_path/"

    # 如果localpath所处目录不存在，那么创建目录
    if [ ! -d $save_path ]; then
        mkdir -p $save_path
    fi

    # 删除临时文件
    cd $save_path && rm -f language_server_linux_x64.download

    # 下载$liunx_url 到对应目录 ~/codeium.codeium-1.2.76/dist/$hash_path/language_server_linux_x64.gz
    wget "$linux_url" -O "$save_path"language_server_linux_x64.gz

    # 解压
    gunzip language_server_linux_x64.gz
}


maoos_download(){
    macos_url='https://ghproxy.com/https://github.com/Exafunction/codeium/releases/download/language-server-v'$server_version'/language_server_macos_x64.gz'
    

    save_path="$HOME/.vscode/extensions/codeium.codeium-$server_version/dist/$hash_path/"

    # 如果localpath所处目录不存在，那么创建目录
    if [ ! -d $save_path ]; then
        mkdir -p $save_path
    fi
    
   wget $macos_arm_url -O "$save_path"language_server_macos_x64.gz
}

maoos_arm_download(){
    macos_arm_url='https://ghproxy.com/https://github.com/Exafunction/codeium/releases/download/language-server-v'$server_version'/language_server_macos_arm.gz'

    save_path="$HOME/.vscode/extensions/codeium.codeium-$server_version/dist/$hash_path/"

    # 如果localpath所处目录不存在，那么创建目录
    if [ ! -d $save_path ]; then
        mkdir -p $save_path
    fi
    
    wget $macos_arm_url -O "$save_path"language_server_macos_arm.gz
    cd $save_path
    gunzip language_server_macos_arm.gz
}

# 判断平台是否为Linux
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    linux_download
# 判断平台是否为Mac OS
elif [[ "$OSTYPE" == "darwin"* ]]; then
    if [[ $(uname -m) == "x86_64" ]]; then
        maoos_download
    elif [[ $(uname -m) == "arm64" ]]; then
        maoos_arm_download 
    else
        # 其他未知架构
        echo "Unknown macOS architecture"
    fi
else
    echo "暂不支持其他平台"
fi


