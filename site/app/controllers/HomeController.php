<?php

class HomeController extends BaseController {

	public function index() {
		return View::make('pages.index');
	}

	public function map() {
		return View::make('pages.map');
	}

	public function mapMobile() {
		return View::make('pages.mapMobile');
	}

	public function musei() {
		return View::make('pages.musei');
	}

	public function organizzazioni() {
		return View::make('pages.organizzazioni');
	}

	public function artigiani() {
		return View::make('pages.artigiani');
	}

	public function agenda() {
		return View::make('pages.agenda');
	}

	public function progetto() {
		return View::make('pages.progetto');
	}

	public function news() {
		return View::make('pages.news');
	}

	public function partners() {
		return View::make('pages.partners');
	}

	public function contatti() {
		return View::make('pages.contatti');
	}

	public function dev() {
		return View::make('pages.dev');
	}

	public function test() {
		return View::make('pages.test');
	}

}

?>
