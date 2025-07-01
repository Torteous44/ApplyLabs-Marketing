import type { Meta, StoryObj } from '@storybook/react'
import { HeroSection } from './HeroSection'

const meta: Meta<typeof HeroSection> = {
  title: 'Pages/Landing/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof HeroSection>

export const Default: Story = {}

export const WithHeader: Story = {
  decorators: [
    (Story) => (
      <div>
        {/* Mock Header */}
        <div className="border-b border-gray-200 bg-white/95 backdrop-blur-sm">
          <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex items-center justify-between h-16 md:h-20">
              <div className="flex items-center space-x-2 font-semibold text-xl tracking-tight">
                <span className="text-black">Interview</span>
                <span className="text-blue-600">Prep</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <span className="text-gray-600">Home</span>
                <span className="text-gray-600">About</span>
                <span className="text-gray-600">Pricing</span>
              </div>
            </div>
          </div>
        </div>
        <Story />
      </div>
    ),
  ],
}

export const CompactVersion: Story = {
  decorators: [
    (Story) => (
      <div className="bg-gray-50">
        <Story />
      </div>
    ),
  ],
} 