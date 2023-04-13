import NextLink from 'next/link';
import {
  Link as MuiLink,
  LinkProps as MuiLinkProps,
  Typography,
} from '@mui/material';
import parse, {
  attributesToProps,
  domToReact,
  Element,
} from 'html-react-parser';
import type { DOMNode } from 'html-react-parser';

const nodeMap: Record<
  (typeof Element)['name'],
  {
    Component: typeof MuiLink;
    componentProps: MuiLinkProps & {
      component?: keyof JSX.IntrinsicElements | typeof NextLink;
    };
  }
> = {
  strong: {
    Component: Typography,
    componentProps: {
      variant: 'body2',
      component: 'strong',
      fontWeight: 'bold',
    },
  },
  li: {
    Component: Typography,
    componentProps: {
      variant: 'body2',
    },
  },
  p: {
    Component: Typography,
    componentProps: {
      variant: 'body2',
      paragraph: true,
    },
  },
  a: {
    Component: MuiLink,
    componentProps: {
      component: NextLink,
    },
  },
};

const parseHtml = (html: string) => {
  const options = {
    replace: (domNode: DOMNode) => {
      if (
        !(
          domNode instanceof Element &&
          Object.keys(nodeMap).indexOf(domNode.name) !== -1
        )
      ) {
        return null;
      }

      const { Component, componentProps } = nodeMap[domNode.name];

      const props = {
        ...attributesToProps(domNode.attribs),
        ...componentProps,
        children: domToReact(domNode.children, options),
      };

      return <Component {...props} />;
    },
  };

  return parse(html, options);
};

export default parseHtml;
