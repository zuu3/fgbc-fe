import { css } from '@emotion/react';

export const colors = {
    grey900: '#191F28',
    grey800: '#333D4B',
    grey700: '#4E5968',
    grey600: '#8B95A1',
    grey500: '#B0B8C1',
    grey100: '#F2F4F6',
    white: '#FFFFFF',
    primary: '#3182F6',
    border: '#E5E8EB',
    background: '#F9FAFB',
};

export const typography = {
    title1: css`
        font-size: 3rem;
        font-weight: 700;
        letter-spacing: -0.03em;
        line-height: 1.4;
        color: ${colors.grey900};
    `,
    title2: css`
        font-size: 2.5rem;
        font-weight: 700;
        letter-spacing: -0.03em;
        line-height: 1.4;
        color: ${colors.grey900};
    `,
    title3: css`
        font-size: 2.25rem;
        font-weight: 700;
        letter-spacing: -0.03em;
        line-height: 1.4;
        color: ${colors.grey900};
    `,
    title4: css`
        font-size: 2rem;
        font-weight: 700;
        letter-spacing: -0.02em;
        line-height: 1.4;
        color: ${colors.grey900};
    `,
    title5: css`
        font-size: 1.75rem;
        font-weight: 700;
        letter-spacing: -0.02em;
        line-height: 1.4;
        color: ${colors.grey900};
    `,
    title6: css`
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: -0.02em;
        line-height: 1.4;
        color: ${colors.grey900};
    `,
    title7: css`
        font-size: 1.25rem;
        font-weight: 700;
        letter-spacing: -0.02em;
        line-height: 1.5;
        color: ${colors.grey900};
    `,
    body1: css`
        font-size: 1rem;
        font-weight: 400;
        letter-spacing: -0.01em;
        line-height: 1.6;
        color: ${colors.grey800};
    `,
    body2: css`
        font-size: 0.95rem;
        font-weight: 400;
        letter-spacing: -0.01em;
        line-height: 1.5;
        color: ${colors.grey700};
    `,
    caption: css`
        font-size: 0.85rem;
        font-weight: 400;
        letter-spacing: 0;
        line-height: 1.4;
        color: ${colors.grey600};
    `
};
