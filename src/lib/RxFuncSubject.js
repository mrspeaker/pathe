import Rx from 'rx';

export default () => {
  const subject = Object.assign(
    (...args) => subject.onNext(...args),
    Rx.Observable.prototype,
    Rx.Subject.prototype);

  Rx.Subject.call(subject);

  return subject;
};
