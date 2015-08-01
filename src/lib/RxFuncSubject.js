import Rx from 'rx';

export default () => {
  const subject = Object.assign(
    (...args) => subject.onNext(...args),
    Rx.Subject.prototype.__proto__,
    Rx.Subject.prototype);

  Rx.Subject.call(subject);

  return subject;
};
