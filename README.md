# AngularJsonpTest

To reproduce the issue:

* `ng build`
* `live-server dist/angular-jsonp-bug`
* Open the URL in Internet Explorer 11
* The following error appears:

```
Unhandled Promise rejection: ng_jsonp_callback_0 is not a function ; Zone: <root> ; Task: Promise.then ; Value: InvalidValueError: ng_jsonp_callback_0 is not a function undefined
```

The same works fine in other browsers (i.e. Chrome, Safari, Chrome-Edge).
