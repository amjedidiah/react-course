# Observer Pattern

## Streams

- A stream looks like a weighted linked list, with the nodes being events and the weights being the time between events.
- To take advantage of the events in the stream, we require a `listener`
- A stream can have multiple listeners

### Listeners

- A listener needs to `subscribe` to a stream to be able to do anything with the events.
- Whenever a listener subscribes to a stream, it only has access to events at that subscription and afterwards. All other events before the subscription are lost to the listener.
- A listener has 3 major parts to it:

  - A `nextOrObserver` function to be called for each event till the end of the stream
  - An `error` function to be called when an error occurs.
  - A `complete` function to be called when the stream is finished.

- It is important to cleanup listeners when they are no longer needed.
