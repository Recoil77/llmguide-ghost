/**
 * Убираем домен и первый сегмент языка.
 * Пример: https://llmguide.io/ru/language/  →  /language/
 */
module.exports = function stripLang(rawUrl = '') {
    const url = String(rawUrl);            // ← гарантируем обычную строку

    return url
        .replace(/^https?:\/\/[^/]+/, '')  // срезаем домен
        .replace(/^\/(ru|de)\//, '/');     // убираем /ru/ или /de/ (добавьте /es/ и т.д.)
};