#!/usr/bin/env tsx

import { writeFileSync } from 'fs';
import { join } from 'path';
import { colors } from '../src/tokens/colors';
import { spacing, spacingFractional } from '../src/tokens/spacing';
import { motion } from '../src/tokens/motion';
import { typography } from '../src/tokens/typography';
import { radius } from '../src/tokens/radius';
import { shadows } from '../src/tokens/shadows';

function flattenObject(obj: Record<string, any>, prefix: string = ''): Record<string, string> {
  const flattened: Record<string, string> = {};
  
  for (const [key, value] of Object.entries(obj)) {
    // Convert decimal keys to valid CSS custom property names
    const safeKey = key.replace(/\./g, '-');
    const newKey = prefix ? `${prefix}-${safeKey}` : safeKey;
    
    if (typeof value === 'object' && value !== null) {
      Object.assign(flattened, flattenObject(value, newKey));
    } else {
      flattened[newKey] = value;
    }
  }
  
  return flattened;
}

function generateCSSVars(tokens: Record<string, any>, category: string): string {
  const flattened = flattenObject(tokens);
  return Object.entries(flattened)
    .map(([key, value]) => `  --${category}-${key}: ${value};`)
    .join('\n');
}

const allSpacing = { ...spacing, ...spacingFractional };

const css = `/* Auto-generated from tokens - do not edit manually */
:root {
${generateCSSVars(colors, 'color')}
${generateCSSVars(allSpacing, 'space')}
${generateCSSVars(motion.duration, 'duration')}
${generateCSSVars(motion.easing, 'easing')}
${generateCSSVars(typography.fontFamily, 'font-family')}
${generateCSSVars(typography.fontSize, 'font-size')}
${generateCSSVars(typography.fontWeight, 'font-weight')}
${generateCSSVars(typography.lineHeight, 'line-height')}
${generateCSSVars(typography.letterSpacing, 'letter-spacing')}
${generateCSSVars(radius, 'radius')}
${generateCSSVars(shadows, 'shadow')}
}`;

const outputPath = join(process.cwd(), 'src', 'styles', 'tokens.css');
writeFileSync(outputPath, css);

console.log('✅ Generated CSS tokens at src/styles/tokens.css'); 