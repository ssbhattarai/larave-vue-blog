<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
    </head>
    <body>
    <div id="app">
            <main-component></main-component>
    </div>
    </body>
    <script src="{{asset('js/app.js')}}"></script>
</html>
