# ember-dayjs

[day.js](https://day.js.org/) template helpers and a service for Ember

## Compatibility

- Ember.js v3.16 or above
- Ember CLI v2.13 or above
- Node.js v10 or above

## Installation

```
ember install ember-dayjs
```

## Usage

## Helpers

### dayjs

```hbs
{{dayjs <date>}}
```

| Parameters | Values                                                                                                                                       |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `<date>`   | Any value(s) [interpretable as a date/time](https://day.js.org/docs/en/parse/parse) by `dayjs` (a date `String` or a `Dayjs` or a `Date`...) |

Returns a Dayjs.

```hbs
{{utc <date>}}
{{utc}}
```

| Parameters | Values                                                                                                                                                                                                          |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<date>`   | Any value(s) [interpretable as a date/time](https://day.js.org/docs/en/plugin/utc#dayjsutc-dayjsutcdatetype-string--number--date--dayjs-format-string) by `dayjs` (a date `String` or a `Dayjs` or a `Date`...) |

Returns a Dayjs with [UTC mode](http://momentjs.com/docs/#/parsing/utc/) set.

**Example**

```hbs
{{utc '2001-10-31T08:24:56'}} {{!-- Wed Oct 31 2001 08:24:56 GMT+0000 --}}
{{utc}} {{!-- current time utc, like Mon Feb 12 2018 20:33:08 GMT+0000 --}}
{{utc (dayjs '2018-01-01T00:00:00+01:00' 'YYYY-MM-DD HH:mm:ssZ')}}  {{!-- Sun Dec 31 2017 23:00:00 GMT+0000 --}}
```

### dayjs-format

```hbs
{{dayjs-format <date> [outputFormat=dayjs.defaultFormat]}}
```

| Parameters     | Values                                                                                                                                       |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `<date>`       | Any value(s) [interpretable as a date/time](https://day.js.org/docs/en/parse/parse) by `dayjs` (a date `String` or a `Dayjs` or a `Date`...) |
| `outputFormat` | An optional date/time `String` [output format](https://day.js.org/docs/en/display/format), defaults to `dayjs.defaultFormat`                 |

_NOTE: for all other helpers, the input format string is the second argument._

**Example**

```hbs
{{dayjs-format '12-1995-25' 'MM/DD/YYYY'}} {{!-- 25/12/1995 --}}
```

### dayjs-from / dayjs-from-now

```hbs
{{dayjs-from <dateA> [<dateB>] [hideAffix=false]}}
{{dayjs-from-now <dateA> [hideAffix=false]}}
```

| Parameters  | Values                                                                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<dateA>`   | Any value(s) [interpretable as a date/time](https://momentjs.com/docs/#/parsing/) by `dayjs` (a date `String` or a `Dayjs` or a `Date`...)                          |
| `<dateB>`   | An optional value(s) [interpretable as a date/time](https://momentjs.com/docs/#/parsing/) by `dayjs` (a date `String` or a `Dayjs` or a `Date`...), defaults to now |
| `hideAffix` | An optional `Boolean` to hide the relative prefix/suffix not.                                                                                                       |

Returns the time between `<dateA>` and `<dateB>` relative to `<dateB>`. See [`momentjs#from`](https://momentjs.com/docs/#/displaying/from/).

**Examples**

```hbs
{{!-- in January 2018 at time of writing --}}
{{dayjs-from '2995-12-25'}} {{!-- in 978 years --}}
{{dayjs-from-now '2995-12-25'}} {{!-- in 978 years --}}
{{dayjs-from '1995-12-25' '2995-12-25' hideAffix=true}} {{!-- 1000 years --}}
```

### dayjs-to / dayjs-to-now

```hbs
{{dayjs-to <dateA> [<dateB>] [hideAffix=false]}}
{{dayjs-to-now <dateA> [hideAffix=false]}}
```

| Parameters  | Values                                                                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| `<dateA>`   | Any value(s) [interpretable as a date/time](https://momentjs.com/docs/#/parsing/) by `dayjs` (a date `String` or a `Dayjs` or a `Date`...)                          |
| `<dateB>`   | An optional value(s) [interpretable as a date/time](https://momentjs.com/docs/#/parsing/) by `dayjs` (a date `String` or a `Dayjs` or a `Date`...), defaults to now |
| `hideAffix` | An optional `Boolean` to hide the relative prefix/suffix or not.                                                                                                    |     |

Returns the time between `<dateA>` and `<dateB>` relative to `<dateA>`. See [`momentjs#to`](https://momentjs.com/docs/#/displaying/to/).

_Note that `dayjs-to-now` is just a more verbose `dayjs-to` without `dateB`. You don't need to use it anymore._

**Examples**

```hbs
{{!-- in January 2018 at time of writing --}}
{{dayjs-to '2995-12-25'}} {{!-- 978 years ago --}}
{{dayjs-to '1995-12-25' '2995-12-25'}} {{!-- in 1000 years --}}
{{dayjs-to-now '1995-12-25' hideAffix=true}} {{!-- 22 years --}}
```

### dayjs-duration

```hbs
{{dayjs-duration <number> [<units>]}}
```

| Parameters | Values                                                                                                                                       |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `<number>` | Any value(s) [interpretable as a duration](https://momentjs.com/docs/#/durations/creating) by `dayjs` (typically a `Number` in milliseconds) |
| `<units>`  | An optional `String` to specify the units of `<number>` (typically `'seconds'`, `'minutes'`, `'hours'`...)                                   |

Returns a Duration automatically [humanized](https://momentjs.com/docs/#/durations/humanize). See [`momentjs#duration`](https://momentjs.com/docs/#/durations/creating/).

**Examples**

```hbs
{{dayjs-duration 100}} {{!-- a few seconds --}}
{{dayjs-duration 24 'hours'}} {{!-- a day --}}
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
