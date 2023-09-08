import { Slug } from "./slug";

test('it should be able to create a new slug from text', () => {
  const slug = Slug.createFromText(' An_Example--title to slug_ ');

  expect(slug.value).toEqual('an-example-title-to-slug');
});