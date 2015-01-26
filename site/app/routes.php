<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', 'HomeController@index');
Route::get('/home', 'HomeController@index');
Route::get('/index', 'HomeController@index');

Route::get('/map', 'HomeController@mapMobile');
Route::get('/map.mobile', 'HomeController@mapMobile');

Route::get('/agenda', 'HomeController@agenda');

Route::get('/musei', 'HomeController@musei');
Route::get('/organizzazioni', 'HomeController@organizzazioni');
Route::get('/artigiani', 'HomeController@artigiani');

Route::get('/progetto', 'HomeController@progetto');
Route::get('/news', 'HomeController@news');
Route::get('/partners', 'HomeController@partners');
Route::get('/contatti', 'HomeController@contatti');

Route::get('/dev', 'HomeController@dev');

Route::get('/test', 'HomeController@test');
