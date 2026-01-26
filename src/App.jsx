import { Button } from './components/atoms/Button'

function App() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">LCA Design System</h1>
      <p className="text-gray-600 mb-6">Run Storybook to see all components:</p>
      <code className="bg-gray-100 px-3 py-2 rounded">npm run storybook</code>

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Quick Preview</h2>
        <div className="flex gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </div>
    </div>
  )
}

export default App
