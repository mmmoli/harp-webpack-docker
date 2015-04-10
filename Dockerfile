FROM phusion/passenger-nodejs:0.9.15

# Set correct environment variables.
ENV HOME /root

# Use baseimage-docker's init process.
CMD ["/sbin/my_init"]

# ...put your own build instructions here...
WORKDIR /home/app/

ADD package.json /home/app/
RUN npm install
ADD . /home/app/

# RUN node_modules/.bin/webpack -p
# Build the static html
RUN ./node_modules/.bin/harp compile ./src ./public

# Enable nginx
RUN rm -f /etc/service/nginx/down
RUN rm /etc/nginx/sites-enabled/default
ADD conf/nginx.conf /etc/nginx/sites-enabled/site.conf


# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*