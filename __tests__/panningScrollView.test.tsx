/* eslint-disable */
import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import PanningScrollView from '../src';

const dummyContent = <Text>Hello world</Text>;
const headerImg = { uri: 'https://i.imgur.com/xjyh403.png' };
const badgeImg = { uri: 'https://i.imgur.com/46QVams.png' };

describe('PanningScrollViewTests', function () {
  it('renders', async () => {
    expect(
      render(
        <PanningScrollView useNativeDriver={false}>
          {dummyContent}
        </PanningScrollView>
      )
    ).toBeTruthy();
  });

  it('renders a header image if provided', async () => {
    const { getByTestId } = render(
      <PanningScrollView headerImage={headerImg} useNativeDriver={false}>
        {dummyContent}
      </PanningScrollView>
    );

    expect(getByTestId('image-header')).toBeTruthy();
  });

  it('renders placeholder if header is not provided', async () => {
    const { getByTestId, queryByTestId } = render(
      <PanningScrollView useNativeDriver={false}>
        {dummyContent}
      </PanningScrollView>
    );

    expect(getByTestId('view-header-placeholder')).toBeTruthy();
    expect(queryByTestId('image-header')).toBeFalsy();
  });

  it('renders a badge if provided', async () => {
    const { getByTestId } = render(
      <PanningScrollView badgeImage={badgeImg} useNativeDriver={false}>
        {dummyContent}
      </PanningScrollView>
    );

    expect(getByTestId('image-badge')).toBeTruthy();
  });

  it('does not render a badge if not provided', async () => {
    const { queryByTestId } = render(
      <PanningScrollView useNativeDriver={false}>
        {dummyContent}
      </PanningScrollView>
    );

    expect(queryByTestId('image-badge')).toBeFalsy();
  });
});
