import Typography from 'typography'
import elkGlen from 'typography-theme-elk-glen'
import grandView from 'typography-theme-grand-view'
import parnassus from 'typography-theme-parnassus'
import sutro from 'typography-theme-sutro'

// ================================================================================================

const typography = new Typography(elkGlen)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

// ================================================================================================

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
