import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

import WidgetList from '../../../src/imports/ui/components/WidgetList.js';

describe('ui.components', function () {
  describe('WidgetList', function () {
    it('should render', function () {
      const renderer = TestUtils.createRenderer();
      renderer.render(<WidgetList />);
      const output = renderer.getRenderOutput();
      expect(output).to.not.be.undefined;
      expect(output.props.className).to.equal('widgets');
    });
  });
});
