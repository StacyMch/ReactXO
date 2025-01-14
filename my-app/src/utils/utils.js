import { WIN_PATTERNS } from '../constants/constants.js';

// Проверка на наличие паттернов победы
export const checkWin = (field) => {
	for (let pattern of WIN_PATTERNS) {
		const [a, b, c] = pattern;
		if (field[a]['cell'] && field[a]['cell'] === field[b]['cell'] && field[a]['cell'] === field[c]['cell']) {
			field[a]['winner'] = 1;
			field[b]['winner'] = 1;
			field[c]['winner'] = 1;
			return field[a]['cell']; // Возвращаем значение игрока, который выиграл
		}
	}
	return null; // Если выигрышной комбинации нет
}

// Проверка на пустые ячейки, возвращает true, если они есть
export const checkEmpty = (field) => (
	field.some(item => !item.cell) // выдает true, если есть хотя бы одна пустая клетка
)
