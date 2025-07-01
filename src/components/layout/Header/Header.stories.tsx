import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'

const meta: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {}

export const WithBackground: Story = {
  decorators: [
    (Story) => (
      <div>
        <Story />
        <div className="h-screen bg-gradient-to-b from-gray-50 to-white p-8">
          <div className="text-center pt-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Page Content Below Header
            </h1>
            <p className="text-lg text-gray-600">
              Notice how the header sticks to the top with a backdrop blur effect.
            </p>
          </div>
        </div>
      </div>
    ),
  ],
}

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">Mobile Navigation</h2>
          <p className="text-gray-600">
            Click the menu button to see the mobile navigation.
          </p>
        </div>
      </div>
    ),
  ],
} 