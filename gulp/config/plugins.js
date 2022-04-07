import replace from "gulp-replace"; //поиск и замена
import plumber from "gulp-plumber"; //обработка ошибок
import notify from "gulp-notify"; //сообщения
import browsersync from "browser-sync"; //local server
import newer from "gulp-newer"; // Проверка обновления
import ifPlugin from "gulp-if";

export const plugins = {
	replace: replace,
	plumber: plumber,
	notify: notify,
	browsersync: browsersync,
	newer: newer,
	if: ifPlugin,
}