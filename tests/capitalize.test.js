import assert from 'assert';
import capitalize from '../src/capitalize.js';

try {
  assert.strictEqual(capitalize('hello'), 'Hello', 'Функция работает неверно!');
  assert.strictEqual(capitalize(''), '', 'Функция работает неверно!');
  console.log('Все тесты пройдены!');
} catch (error) {
  console.error('Ошибка:', error.message);
}
