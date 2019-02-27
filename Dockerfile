# 使用 node 10.15.0 的精简版作为基础镜像
FROM node:10.15.0-slim

# 安装nginx
RUN apt-get update \
    && apt-get install -y nginx

# 指定工作目录
WORKDIR /app

# 将当前目录下的所有文件拷贝到工作目录下
COPY . /app/

# 声明运行时容器提供的服务端口
EXPOSE 80

RUN  cp -r ./* /var/www/html \
     && rm -rf /app

# 以前台方式启动 nginx
CMD ["nginx","-g","daemon off;"]
