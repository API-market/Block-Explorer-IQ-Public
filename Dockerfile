FROM centos:centos7
MAINTAINER Everipedia International

# Dependencies
RUN yum -y install epel-release 
RUN yum -y install nginx centos-release-scl libffi-devel gcc-c++ sysstat libjpeg-turbo-devel libpng-devel freetype-devel libffi-devel libxml2-devel libxslt-devel libevent-devel
RUN yum-config-manager --enable rhel-server-rhscl-7-rpms
RUN yum -y install fontconfig freetype freetype-devel fontconfig-devel ncurses-devel python-devel python-setuptools libmysqlclient-devel libssl-devel
RUN yum -y install git python-pip openssh pandoc openssh-server openssh-clients openssl-libs initscripts gpgme-devel libattr-devel
RUN yum -y install mysql-devel htop devtoolset-7 readline-devel patch unixODBC-devel libsqlite3x-devel.x86_64 libcurl-devel
RUN yum -y install sshpass

# ------------------------
# SSH Server support
# ------------------------
#RUN echo "root:ffffffffffffff" | chpasswd

# Generate ssh keys
RUN ssh-keygen -A

# Copy SSH config
COPY sshd_config /etc/ssh/

# Change working directory
WORKDIR /root

# Set up keys
RUN mkdir .ssh
RUN touch .ssh/known_hosts
COPY .ssh/github_rsa.pub .ssh/id_rsa.pub
COPY .ssh/github_rsa.prv .ssh/id_rsa
COPY .ssh/ipfsapiuser_rsa.pub .ssh/ipfsapiuser_rsa.pub
COPY .ssh/ipfsapiuser_rsa.prv .ssh/ipfsapiuser_rsa
RUN chmod 400 .ssh/id_rsa
RUN chmod 400 .ssh/id_rsa.pub
RUN chmod 400 .ssh/ipfsapiuser_rsa
RUN chmod 400 .ssh/ipfsapiuser_rsa.pub
RUN ssh-keyscan github.com >> .ssh/known_hosts
RUN ssh-keyscan xx.xx.xx.xxx >> .ssh/known_hosts

# Skip to this step
COPY marker /dev/null

# Clone repo
RUN git clone git@github.com:xxxxx/xxxxx.git

# Change working directory
WORKDIR /root/BlockExplorer

# Python dependencies
RUN pip install --upgrade pip
RUN pip install --ignore-installed -r requirements.txt

# Nginx
RUN cp nginx.conf /etc/nginx/nginx.conf
COPY certs/* /etc/nginx/
EXPOSE 22 25 80 443 465 587 2222 3306 4001 8000 8080

# Gunicorn config
RUN mkdir -p /var/log/gunicorn

#ENTRYPOINT ["/bin/bash"]

# Startup script
CMD sh start.sh
