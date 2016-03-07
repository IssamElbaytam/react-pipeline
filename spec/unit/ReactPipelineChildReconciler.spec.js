jest.mock('../../src/instantiatePipelineComponent');

import React from 'react';

const ReactPipelineChildReconciler = require('../../src/ReactPipelineChildReconciler').default;
const instantiatePipelineComponent = require('../../src/instantiatePipelineComponent');

/**
 * A note about unit tests for this file, the source code supplied in this
 * version is a copy from the raw react code with only a single line changed
 * so that instantiations use our custom mixin. I will not build tests for
 * code that is already tested within the react package.
 */
describe('ReactPipelineChildReconciler', () => {
  it('should fail when matching child keys', () => {
    const result = ReactPipelineChildReconciler.instantiateChildren(['<div>'])
    expect(instantiatePipelineComponent).toBeCalled();
  });

  it('should return null if no children are passed', () => {
    const result = ReactPipelineChildReconciler.instantiateChildren()
    expect(result).toBe(null);
  });
});