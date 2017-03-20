const test = require("ava").test;
const catchr = require("./catchr");

const kGoodJsonStr = '{"a":"b"}';
const kGoodJsonValue = { a: "b" };
const kBadJsonStr = "x";
const kDefaultJson = ["defaultJson"];

test("exception: false, default: false, receive: false", t => {
  const [result] = catchr(_ => JSON.parse(kGoodJsonStr));
  t.deepEqual(result, kGoodJsonValue);
});

test("exception: false, default: true, receive: false", t => {
  const [result] = catchr(_ => JSON.parse(kGoodJsonStr), kDefaultJson);
  t.deepEqual(result, kGoodJsonValue);
});

test("exception: false, default: true, receive: true", t => {
  const [result, err] = catchr(_ => JSON.parse(kGoodJsonStr));
  t.deepEqual(result, kGoodJsonValue);
  t.deepEqual(err, null);
});

test("exception: false, default: false, receive: true", t => {
  const [result, err] = catchr(_ => JSON.parse(kGoodJsonStr));
  t.deepEqual(result, kGoodJsonValue);
  t.deepEqual(err, null);
});

test("exception: true, default: false, receive: false", t => {
  const [result] = catchr(_ => JSON.parse(kBadJsonStr));
  t.deepEqual(result, undefined);
});

test("exception: true, default: true, receive: false", t => {
  const [result] = catchr(_ => JSON.parse(kBadJsonStr), kDefaultJson);
  t.deepEqual(result, kDefaultJson);
});

test("exception: true, default: true, receive: true", t => {
  const [result, err] = catchr(_ => JSON.parse(kBadJsonStr), kDefaultJson);
  t.deepEqual(result, kDefaultJson);
  t.deepEqual(err.name, "SyntaxError");
});

test("exception: true, default: false, receive: true", t => {
  const [result, err] = catchr(_ => JSON.parse(kBadJsonStr));
  t.deepEqual(result, undefined);
  t.deepEqual(err.name, "SyntaxError");
});
