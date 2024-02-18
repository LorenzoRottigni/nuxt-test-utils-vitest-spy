import { it, vi, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import MyComponent from '~/components/MyComponent.vue';

it('Should spy method.', async () => {
  const component = await mountSuspended(MyComponent);
  const spy = vi.spyOn(component.vm, 'exampleMethod');
  await component.find('button').trigger('click');
  expect(spy).toHaveBeenCalled();
});
