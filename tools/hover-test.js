const assert = require("node:assert/strict")
const test = require("node:test")
const model = require("../TrayModel.js")

test("the drawer opens only from the chevron and remains open across its contents", () => {
  assert.equal(typeof model.nextHoverExpansion, "function")
  const next = model.nextHoverExpansion
  assert.equal(next(false, true, 70, 12, false, 24, 32), false)
  assert.equal(next(false, true, 12, 12, false, 24, 32), true)
  assert.equal(next(true, true, 70, 12, false, 24, 32), true)
  assert.equal(next(true, false, 70, 12, false, 24, 32), false)
})

test("the chevron hit area follows a vertical bar", () => {
  assert.equal(typeof model.nextHoverExpansion, "function")
  const next = model.nextHoverExpansion
  assert.equal(next(false, true, 12, 70, true, 24, 32), false)
  assert.equal(next(false, true, 12, 12, true, 24, 32), true)
})
