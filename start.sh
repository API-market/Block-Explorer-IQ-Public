#!/bin/bash

# start nginx
echo "Starting nginx"
nginx

# start SSH
echo "Starting SSH server"
/usr/sbin/sshd -D &

# SSH tunnel to IPFS API
echo "Starting IPFS Tunnel"
nohup sshpass -p 'xxxxxxxx' ssh -N -l ipfsapiuser -L 5001:localhost:5001 xx.xx.xx.xxx > /dev/null 2>&1 &
echo "IPFS Tunnel Complete"

# Start Gunicorn processes
echo "Starting Gunicorn"
exec gunicorn fbwiki.wsgi:application --bind 0.0.0.0:8000 --workers 8  --error-logfile '/var/log/gunicorn/error.log'  --access-logfile '/var/log/gunicorn/access.log' --log-level INFO
