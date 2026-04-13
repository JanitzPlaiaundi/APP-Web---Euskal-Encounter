FROM php:8.2-apache

RUN apt-get update \
    && apt-get install -y libxslt1-dev \
    && docker-php-ext-install mysqli xsl
