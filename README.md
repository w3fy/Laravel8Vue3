
# w3fy Laravel 8 / Vue 3 with Auth
A good starting point for a project with laravel 8 and vue 3, includes auth.

## Install
- `composer install`
- `npm i`
- Copy the `.env.example` file into `.env`
    - set the APP_URL, otherwise the Session will not work
- Create a new app key `php artisan key:generate`
- Link storage `php artisan storage:link`
- Create a database
- Migrate `php artisan migrate`

## Dev
FE: `npm run watch`
BE: `php artisan serve`

## ENV Cache
- `php artisan config:cache`

## Database
utf8mb4 - utf8mb4_unicode_ci
`php artisan migrate`

Thanks to [https://shouts.dev/](https://shouts.dev/) for the perfect tutorials.
