# ember-dayjs

[day.js](https://day.js.org/) template helpers and a service for Ember.
Nearly drop-in replacement for [ember-moment](https://github.com/stefanpenner/ember-moment).
Just replace all `moment-` with `dayjs-` and try.

## Compatibility

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v12 or above


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

Returns a Dayjs with [UTC mode](http://dayjs.com/docs/#/parsing/utc/) set.

**Example**

```hbs
{{utc '2001-10-31T08:24:56'}}
{{! Wed Oct 31 2001 08:24:56 GMT+0000 }}
{{utc}}
{{! current time utc, like Mon Feb 12 2018 20:33:08 GMT+0000 }}
{{utc (dayjs '2018-01-01T00:00:00+01:00' 'YYYY-MM-DD HH:mm:ssZ')}}
{{! Sun Dec 31 2017 23:00:00 GMT+0000 }}
```

### dayjs-format

```hbs
{{dayjs-format <date> [outputFormat=dayjs.defaultFormat] [<inputFormat>]}}
```

| Parameters     | Values                                                                                                                                       |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `<date>`       | Any value(s) [interpretable as a date/time](https://day.js.org/docs/en/parse/parse) by `dayjs` (a date `String` or a `Dayjs` or a `Date`...) |
| `outputFormat` | An optional date/time `String` [output format](https://day.js.org/docs/en/display/format), defaults to `dayjs.defaultFormat`                 |
| `inputFormat`  | <inputFormat> An optional named argument for date/time String input format                                                                                      |

**Example**

```hbs
{{dayjs-format '12-1995-25' 'MM/DD/YYYY' inputFormat='MM-YYYY-DD'}} {{! 25/12/1995 }}
```

### timezone

```hbs
{{dayjs-tz <date> [timeZone]}}
```

| Parameters   | Values                                                                                                                                       |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `<date>`     | Any value(s) [interpretable as a date/time](https://day.js.org/docs/en/parse/parse) by `dayjs` (a date `String` or a `Dayjs` or a `Date`...) |
| `<timeZone>` | Optional: Time Zone Name Ex: America/Los_Angeles                                                                                             |

Returns a Dayjs corresponding to the `<timestamp>`.

**Examples**

```hbs
{{dayjs-tz '2014-06-01 12:00' 'America/Los_Angeles'}}
```

### dayjs-from / dayjs-from-now

```hbs
{{dayjs-from <dateA> [<dateB>] [hideAffix=false]}}
{{dayjs-from-now <dateA> [hideAffix=false]}}
```

| Parameters  | Values                                                                                                                                                                |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<dateA>`   | Any value(s) [interpretable as a date/time](https://day.js.org/docs/en/parse/parse) by `dayjs` (a date `String` or a `Dayjs` or a `Date`...)                          |
| `<dateB>`   | An optional value(s) [interpretable as a date/time](https://day.js.org/docs/en/parse/parse) by `dayjs` (a date `String` or a `Dayjs` or a `Date`...), defaults to now |
| `hideAffix` | An optional `Boolean` to hide the relative prefix/suffix not.                                                                                                         |

Returns the time between `<dateA>` and `<dateB>` relative to `<dateB>`. See [`dayjs#from`](#/docs/#/displaying/from/).

**Examples**

```hbs
{{! in January 2018 at time of writing }}
{{dayjs-from '2995-12-25'}}
{{! in 978 years }}
{{dayjs-from-now '2995-12-25'}}
{{! in 978 years }}
{{dayjs-from '1995-12-25' '2995-12-25' hideAffix=true}}
{{! 1000 years }}
```

### dayjs-to / dayjs-to-now

```hbs
{{dayjs-to <dateA> [<dateB>] [hideAffix=false]}}
{{dayjs-to-now <dateA> [hideAffix=false]}}
```

| Parameters  | Values                                                                                                                                                                |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<dateA>`   | Any value(s) [interpretable as a date/time](https://day.js.org/docs/en/parse/parse) by `dayjs` (a date `String` or a `Dayjs` or a `Date`...)                          |
| `<dateB>`   | An optional value(s) [interpretable as a date/time](https://day.js.org/docs/en/parse/parse) by `dayjs` (a date `String` or a `Dayjs` or a `Date`...), defaults to now |
| `hideAffix` | An optional `Boolean` to hide the relative prefix/suffix or not.                                                                                                      |

Returns the time between `<dateA>` and `<dateB>` relative to `<dateA>`. See [`dayjs#to`](#/docs/#/displaying/to/).

_Note that `dayjs-to-now` is just a more verbose `dayjs-to` without `dateB`. You don't need to use it anymore._

**Examples**

```hbs
{{! in January 2018 at time of writing }}
{{dayjs-to '2995-12-25'}}
{{! 978 years ago }}
{{dayjs-to '1995-12-25' '2995-12-25'}}
{{! in 1000 years }}
{{dayjs-to-now '1995-12-25' hideAffix=true}}
{{! 22 years }}
```

### dayjs-duration

```hbs
{{dayjs-duration <number> [<units>]}}
```

| Parameters | Values                                                                                                                    |
| ---------- | ------------------------------------------------------------------------------------------------------------------------- |
| `<number>` | Any value(s) [interpretable as a duration](#/docs/#/durations/creating) by `dayjs` (typically a `Number` in milliseconds) |
| `<units>`  | An optional `String` to specify the units of `<number>` (typically `'seconds'`, `'minutes'`, `'hours'`...)                |

**Examples**

```hbs
{{dayjs-duration 100}}
{{! duration object }}
{{dayjs-duration 24 'hours'}}
{{! duration object }}
```

### dayjs-duration-humanize

```hbs
{{dayjs-duration-humanize <number> [<units>]}}
```

| Parameters | Values                                                                                                                    |
| ---------- | ------------------------------------------------------------------------------------------------------------------------- |
| `<number>` | Any value(s) [interpretable as a duration](#/docs/#/durations/creating) by `dayjs` (typically a `Number` in milliseconds) |
| `<units>`  | An optional `String` to specify the units of `<number>` (typically `'seconds'`, `'minutes'`, `'hours'`...)                |

**Examples**

```hbs
{{dayjs-duration-humanize 100}}
{{! a few seconds }}
{{dayjs-duration-humanize 24 'hours'}}
{{! a day }}
```

### dayjs-calendar

```hbs
{{dayjs-calendar <dateA> [<formatHash>]}}
```

| Parameters     | Values                                                                                                                                       |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `<dateA>`      | Any value(s) [interpretable as a date/time](https://day.js.org/docs/en/parse/parse) by `dayjs` (a date `String` or a `Dayjs` or a `Date`...) |
| `<formatHash>` | An optional [output format hash](#/docs/#/displaying/calendar-time), defaults to `{}`                                                        |

**Examples**

```hbs
{{! in March 2021 at time of writing }}
{{dayjs-from-now '2021-03-19'}}
{{! 2 days ago }}
{{dayjs-calendar '2021-03-20'}}
{{! Yesterday at 12:00 AM }}
```

### dayjs-diff

```hbs
{{dayjs-diff <dateA> <dateB> [precision='milliseconds' [float=false]]}}
```

| Parameters  | Values                                                                                                                                       |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `<dateA>`   | Any value(s) [interpretable as a date/time](https://day.js.org/docs/en/parse/parse) by `dayjs` (a date `String` or a `Dayjs` or a `Date`...) |
| `<dateB>`   | Any value(s) [interpretable as a date/time](https://day.js.org/docs/en/parse/parse) by `dayjs` (a date `String` or a `Dayjs` or a `Date`...) |
| `precision` | An optional [unit of measurement](#/docs/#/displaying/difference), defaults to `'milliseconds'`                                              |
| `float`     | An optional `Boolean` to get the floating point result, rather than the integer value                                                        |

Returns the difference in `precision` units between `<dateA>` and `<dateB>` with floating point accuracy if `float` is `true`. See [`dayjs#diff`](#/docs/#/displaying/difference/).

**Examples**

```hbs
{{dayjs-diff '2018-01-25' '2018-01-26'}}
{{! 86400000 }}
{{dayjs-diff '2018-01-25' '2018-01-26' precision='years' float=true}}
{{! 0.0026881720430107525 }}
```

### dayjs-add

```hbs
{{dayjs-add <date> <number> [precision='milliseconds']}}
```

| Parameters  | Values                                                                                                                                                                            |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<date>`    | An optional value [interpretable as a date/time](https://day.js.org/docs/en/parse/parse) by `dayjs` (a date `String` or a `Dayjs` or a `Date`...). Defaults to value of `dayjs()` |
| `<number>`  | Any value(s) [interpretable as a duration](#/docs/#/durations/creating) by `dayjs` that is the amount of the `precision` you want to `add` to the `date` provided                 |
| `precision` | An optional [unit of measurement](#/docs/#/displaying/difference), defaults to `'milliseconds'`                                                                                   |

Mutates the original dayjs by adding time. See [`dayjs#add`](#/docs/#/manipulating/add/).

**Examples**

```hbs
{{! Add 6 days to a date }}
{{dayjs-add '10-19-2019' 6 precision='days'}}

{{! Add 6 days to a date }}
{{dayjs-add '10-19-2019' (dayjs-duration (hash days=6))}}

{{! Print a date 6 days from now }}
{{dayjs-add 6 precision='days'}}
```

### dayjs-subtract

```hbs
{{dayjs-subtract <date> <number> [precision='milliseconds']}}
```

| Parameters  | Values                                                                                                                                                                            |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<date>`    | An optional value [interpretable as a date/time](https://day.js.org/docs/en/parse/parse) by `dayjs` (a date `String` or a `Dayjs` or a `Date`...). Defaults to value of `dayjs()` |
| `<number>`  | Any value(s) [interpretable as a duration](#/docs/#/durations/creating) by `dayjs` that is the amount of the `precision` you want to `subtract` from the `date` provided          |
| `precision` | An optional [unit of measurement](#/docs/#/displaying/difference), defaults to `'milliseconds'`                                                                                   |

Mutates the original dayjs by removing time. See [`dayjs#subtract`](#/docs/#/manipulating/subtract/).

**Examples**

```hbs
{{! Remove 6 days from a date }}
{{dayjs-subtract '10-19-2019' 6 precision='days'}}

{{! Remove 6 days from a date }}
{{dayjs-subtract '10-19-2019' (dayjs-duration (hash days=6))}}

{{! Print a date 6 days earlier }}
{{dayjs-subtract 6 precision='days'}}
```

### dayjs-is-before / dayjs-is-after / dayjs-is-same / dayjs-is-same-or-before / dayjs-is-same-or-after

```hbs
{{dayjs-is-before <dateA> [<dateB>] [precision='milliseconds']}}
{{dayjs-is-after <dateA> [<dateB>] [precision='milliseconds']}}
{{dayjs-is-same <dateA> [<dateB>] [precision='milliseconds']}}
{{dayjs-is-same-or-before <dateA> [<dateB>] [precision='milliseconds']}}
{{dayjs-is-same-or-after <dateA> [<dateB>] [precision='milliseconds']}}
```

| Parameters  | Values                                                                                                                                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<dateA>`   | Any value(s) [interpretable as a date/time](https://day.js.org/docs/en/parse/parse) by `dayjs` (a date `String` or a `Dayjs` or a `Date`...)                                                                              |
| `<dateB>`   | An optional value(s) [interpretable as a date/time](https://day.js.org/docs/en/parse/parse) by `dayjs` (a date `String` or a `Dayjs` or a `Date`...). If not given, `<dateA>` becomes now and `<dateB>` becomes `<dateA>` |
| `precision` | An optional `String` unit of comparison [precision](#/docs/#/query/isBefore), defaults to `'milliseconds'`                                                                                                                |

Returns a `Boolean` that indicates if `<dateA>` is respectively before/after/the same/same or before/ same or after `<dateB>` to the `precision` level. See [`dayjs#queries`](#/docs/#/query/).

**Examples**

```hbs
{{dayjs-is-before '2995-12-25'}}
{{! false }}
{{dayjs-is-before '2018-01-25' '2018-01-26' precision='years'}}
{{! false }}
{{dayjs-is-same-or-after '2018-01-25' '2018-01-26' precision='years'}}
{{! true }}
```

### is-between

```hbs
{{dayjs-is-between <date> <dateA> [<dateB>] [precision='year' inclusivity='[)']}}
```

| Parameters    | Values                                                                                                                                                                                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<date>`      | Any value(s) [interpretable as a date/time](https://day.js.org/docs/en/parse/parse) by `dayjs` (a date `String` or a `Dayjs` or a `Date`...)                                                                                                                              |
| `<dateA>`     | A boundary value(s) [interpretable as a date/time](https://day.js.org/docs/en/parse/parse) by `dayjs` (a date `String` or a `Dayjs` or a `Date`...)                                                                                                                       |
| `<dateB>`     | An optional boundary value(s) [interpretable as a date/time](https://day.js.org/docs/en/parse/parse) by `dayjs` (a date `String` or a `Dayjs` or a `Date`...). If not given `<date>` is assigned now, `<dateA>` is assigned `<date>` and `<dateB>` is assigned `<dateA>`. |
| `precision`   | An optional `String` unit of comparison [precision](#/docs/#/query/is-between), defaults to `'milliseconds'`                                                                                                                                                              |
| `inclusivity` | An optional `String` indicating inclusivity of the boundaries, defaults to `()`                                                                                                                                                                                           |

Returns a `Boolean` that indicates if `<date>` is between `<dateA>` and `<dateB>` to the `precision` level and with boundary inclusions specified by `inclusivity`. See [`dayjs#is-between`](#/docs/#/query/is-between).

**Examples**

```hbs
{{dayjs-is-between '1995-12-25' '2995-12-25'}}
{{! true }}
{{dayjs-is-between
  '1995-12-25'
  '1995-12-25'
  '2995-12-25'
  precision='years'
  inclusivity='()'
}}
{{! true }}
```

### now

```hbs
{{now}}
{{dayjs-format (now) 'MM-DD-YYYY'}}
```

Returns the present Dayjs.

**Examples**

```hbs
{{now}}
{{! Current Date Time }}
{{now interval=1000}}
{{! <current date and updating every 1-second (1000 milliseconds).> }}
```

### unix

```hbs
{{unix <timestamp>}}
```

| Parameters    | Values                                                                                                      |
| ------------- | ----------------------------------------------------------------------------------------------------------- |
| `<timestamp>` | An integer `Number` value representing the number of seconds since the Unix Epoch (January 1 1970 12AM UTC) |

Returns a Dayjs corresponding to the `<timestamp>`.

**Examples**

```hbs
{{unix 1516586508}}
{{! Sun Jan 21 2018 21:01:48 GMT-0500 }}
{{! Warning: The passing argument must be a number }}
{{unix '1516586508'}}
{{! Invalid date }}
```

### Common optional named arguments

All helpers accept the following optional named arguments (even though they are not always applicable):

| Parameters | Values                                                                                       |
| ---------- | -------------------------------------------------------------------------------------------- |
| `locale`   | An optional `String` [locale](#/docs/#/i18n/), to override the default global `dayjs.locale` |
| `interval` | An optional interval `Number` of milliseconds when the helper should be recomputed           |

**Examples**

```hbs
{{now interval=1000}}
{{! <current date and updating every 1-second (1000 milliseconds)> }}
{{dayjs-is-before (now) '2018-01-26' interval=60000}}
{{! if this was true initially, it will always be true despite interval }}
```

### i18n support

#### Cherry pick locales (optimal)

```js
// ember-cli-build.js
let app = new EmberApp(defaults, {
  'ember-dayjs': {
    locales: ['tr'], // English is automatically included. No need to add.
  },
}
```

#### Cherry pick plugins (optimal)

```js
// ember-cli-build.js
let app = new EmberApp(defaults, {
  'ember-dayjs': {
    plugins: ['utc', 'weekOfYear', 'relativeTime', 'duration', 'calendar'], // Case-sensitive
  },
}
```

### Configure default runtime locale/timeZone

#### Globally set locale

```js
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service
  dayjs;

  @action
  changeLanguage(locale) {
    this.dayjs.setLocale(locale); // tr
  }
}
```

#### Globally set time zone

```js
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service
  dayjs;

  @action
  changeTimeZone(timeZone) {
    this.dayjs.setTimeZone(timeZone); // 'America/Los_Angeles'
  }
}
```

#### Reset time zone

```js
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service
  dayjs;

  @action
  resetTimezone() {
    this.dayjs.resetTimezone();
  }
}
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
