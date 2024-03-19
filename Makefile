# Makefile for web deployment
# Must first:
# mkdir /var/www/html/RPS
# sudo chown ubuntu /var/www/html/RPS

all: PutHTML

PutHTML:
	cp rps.html /var/www/html/RPS/
	cp rps.css /var/www/html/RPS/
	cp rps.js /var/www/html/RPS/

	echo "Current contents of your HTML directory: "
	ls -l /var/www/html/RPS/
