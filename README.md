# "Универсальный" сервер для выпускного проекта

## Как работает сервер?

Вы описываете состояние (данные) в файле `state.json`, который загружается при старте сервера.

Состояние представляет собой упрощённый аналог `state` Redux - это объект, в котором свойства - это произвольные
массивы.

Вы можете выполнять с этими массивами типичные операции:

1. Получить содержимое массива
2. Получить конкретный элемент из массива по `id`
3. Добавить элемент в массив (нужно передавать JSON с `id` = 0)
4. Обновить элемент в массиве (нужно передавать JSON с `id` != 0)
5. Удалить элемент из массива (нужно передавать `id` в адресной строке - см. примеры)

## Примеры

В `state.json`, который идёт по умолчанию, есть ключ `accounts`, в котором хранятся счета пользователя. Соответственно, мы можем выполнять операции с этими счетами.

Везде дальше в URL'ах будет `accounts`. Но если вы захотите использовать не `accounts`, а, например, `history` (история операций пользователя), то вместо `accounts` везде в URL'ах подставляете `history`.

1\. Получение списка всех счетов

```http request
GET http://localhost:9999/api/accounts
```

2\. Получение конкретного счёта по `id`, где `1001` - это `id` счёта

```http request
GET http://localhost:9999/api/accounts/1001
```

3\. Добавление/создание нового счёта (`id` будет сгенерирован автоматически)

```http request
POST http://localhost:9999/api/accounts
Content-Type: application/json

{
  "id": 0,
  "title": "Дополнительный счёт",
  "number": "XXXXXXXXXXXXXXXXXXX",
  "balance": 99999.99
}
```

**Важно**: сервер не проверяет данные, которые вы присылаете (только смотрит `id === 0`), в остальном - сохраняет запись "как есть".

Т.е. вам на клиентской стороне придётся самим установить номер счёта и баланс (в реальной жизни это делает сервер). Но такова цена "универсальности".

4\. Полное изменение существующего счёта (`id` должен быть не равен `0`)

```http request
POST http://localhost:9999/api/accounts
Content-Type: application/json

{
  "id": 1001,
  "title": "Переименованный счёт",
  "number": "XXXXXXXXXXXXXXXXXXX",
  "balance": 99999.99
}
```

**Важно**: сервер не проверяет данные, которые вы присылаете (только смотрит `id !== 0`), в остальном - сохраняет запись "как есть".

5\. Частичное изменение существующего счёта (`id` должен быть не равен `0`)

```http request
PUT http://localhost:9999/api/accounts/1001
Content-Type: application/json

{
  "balance": 99999.99
}
```

**Важно**: сервер не проверяет данные, которые вы присылаете (только смотрит `id !== 0`), в остальном - сохраняет запись "как есть".

Например, чтобы эмулировать списание денег со счёта, вам нужно будет отправить этот запрос, в котором прислать уже уменьшенный баланс.

При этом перепишется только баланс (вы можете отправить больше полей).

6\. Удаление счёта по `id` (`1001` - это и есть `id`)

```http request
DELETE http://localhost:9999/api/accounts/1001
```

Для этого у вас есть запрос: `deleteJSON` в последней лекции (`04_thunk`).
