import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Section } from "./Section";

const meta: Meta<typeof Section> = {
	title: "Layout/Section",
	component: Section,
	parameters: {
		layout: "fullscreen",
	},
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["default", "dark", "accent", "transparent"],
		},
		size: {
			control: { type: "select" },
			options: ["sm", "md", "lg", "xl"],
		},
		container: {
			control: { type: "boolean" },
		},
	},
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Default: Story = {
	args: {
		children: (
			<div className="text-center">
				<h2 className="text-3xl font-bold mb-4">Section Content</h2>
				<p className="text-lg text-gray-600">
					This is a section with default styling and medium padding.
				</p>
			</div>
		),
	},
};

export const Dark: Story = {
	args: {
		variant: "dark",
		children: (
			<div className="text-center">
				<h2 className="text-3xl font-bold mb-4">Dark Section</h2>
				<p className="text-lg text-gray-300">
					This section has a dark background with white text.
				</p>
			</div>
		),
	},
};

export const Accent: Story = {
	args: {
		variant: "accent",
		children: (
			<div className="text-center">
				<h2 className="text-3xl font-bold mb-4">Accent Section</h2>
				<p className="text-lg text-gray-600">
					This section uses the accent background color.
				</p>
			</div>
		),
	},
};

export const Sizes: Story = {
	render: () => (
		<div>
			<Section size="sm" className="border-b">
				<div className="text-center">
					<h3 className="text-xl font-bold">Small Section</h3>
					<p>Less padding for compact content</p>
				</div>
			</Section>
			<Section size="md" className="border-b">
				<div className="text-center">
					<h3 className="text-xl font-bold">Medium Section</h3>
					<p>Default padding size</p>
				</div>
			</Section>
			<Section size="lg" className="border-b">
				<div className="text-center">
					<h3 className="text-xl font-bold">Large Section</h3>
					<p>More generous padding</p>
				</div>
			</Section>
			<Section size="xl">
				<div className="text-center">
					<h3 className="text-xl font-bold">Extra Large Section</h3>
					<p>Maximum padding for hero sections</p>
				</div>
			</Section>
		</div>
	),
};

export const NoContainer: Story = {
	args: {
		container: false,
		className: "bg-gradient-to-r from-blue-500 to-purple-600 text-white",
		children: (
			<div className="text-center px-4">
				<h2 className="text-3xl font-bold mb-4">Full Width Section</h2>
				<p className="text-lg">
					This section spans the full width without container constraints.
				</p>
			</div>
		),
	},
};
