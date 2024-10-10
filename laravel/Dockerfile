# Sử dụng image PHP với Apache
FROM php:7.4-apache

# Cài đặt các phần mở rộng cần thiết
RUN apt-get update && apt-get install -y libpng-dev libjpeg-dev libfreetype6-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql

# Cài đặt Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Đặt thư mục làm việc
WORKDIR /var/www/html

# Sao chép tất cả các tệp vào image
COPY . .

# Cài đặt các phụ thuộc của Laravel
RUN composer install

# Cấp quyền cho thư mục storage và bootstrap/cache
RUN chown -R www-data:www-data storage bootstrap/cache

# Cấu hình Apache
COPY ./docker/vhost.conf /etc/apache2/sites-available/000-default.conf

# Kích hoạt mod_rewrite
RUN a2enmod rewrite
