import { motion } from 'framer-motion'
import styles from './MdsLibraryMap.module.css'

// Component libraries that consume the shared foundations. '+ more' is kept
// last so it lands at the bottom in both layouts below (the vertical mobile
// list naturally, the desktop hexagon via the angle offset in hexPosition).
const LIBRARIES = [
  'mds-react',
  'mds-ios',
  'mds-android',
  'mds-wordpress',
  'mds-web-components',
  '+ more',
]

// Page background — used to fill the "+ more" node so it visually covers
// the connecting line where it passes underneath, same as the solid nodes.
const PAGE_BG = '#f2f2f2'

const viewportOnce = { once: true, margin: '-60px' } as const

function lineTransition(i: number) {
  return { duration: 0.6, delay: 0.15 + i * 0.08, ease: 'easeOut' as const }
}
function nodeTransition(i: number) {
  return { duration: 0.5, delay: 0.4 + i * 0.08, ease: 'easeOut' as const }
}
function pulseTransition(i: number) {
  return {
    duration: 1.6,
    delay: 1.4 + i * 0.3,
    repeat: Infinity,
    repeatDelay: LIBRARIES.length * 0.3 + 1.4,
    ease: 'easeInOut' as const,
  }
}

/* ── Desktop: hexagon of nodes around the foundations ────────────────── */

const D_VIEW_W = 560
const D_VIEW_H = 430
const D_CENTER = { x: D_VIEW_W / 2, y: D_VIEW_H / 2 }
const D_RADIUS = 170
const D_NODE_W = 150
const D_NODE_H = 36
const D_CENTER_R = 66

// Rotated so '+ more' (the last item) lands at the bottom of the hexagon.
function hexPosition(i: number, total: number) {
  const angle = (-210 + (360 / total) * i) * (Math.PI / 180)
  return {
    x: D_CENTER.x + D_RADIUS * Math.cos(angle),
    y: D_CENTER.y + D_RADIUS * Math.sin(angle),
  }
}

function DesktopMap() {
  return (
    <svg
      viewBox={`0 0 ${D_VIEW_W} ${D_VIEW_H}`}
      className={styles.svgDesktop}
      role="img"
      aria-label="Diagram of shared foundations — tokens, icons and assets — at the center, connected to the component libraries that consume them: mds-react, mds-web-components, mds-wordpress, mds-ios, mds-android, and more."
    >
      {LIBRARIES.map((lib, i) => {
        const pos = hexPosition(i, LIBRARIES.length)
        return (
          <motion.line
            key={`line-${lib}`}
            x1={D_CENTER.x}
            y1={D_CENTER.y}
            x2={pos.x}
            y2={pos.y}
            stroke="#121212"
            strokeOpacity={0.25}
            strokeWidth={2}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={viewportOnce}
            transition={lineTransition(i)}
          />
        )
      })}

      {LIBRARIES.map((lib, i) => {
        const pos = hexPosition(i, LIBRARIES.length)
        return (
          <motion.circle
            key={`pulse-${lib}`}
            r={4}
            fill="#121212"
            initial={{ opacity: 0 }}
            animate={{ cx: [D_CENTER.x, pos.x], cy: [D_CENTER.y, pos.y], opacity: [0, 0.7, 0] }}
            transition={pulseTransition(i)}
          />
        )
      })}

      {LIBRARIES.map((lib, i) => {
        const pos = hexPosition(i, LIBRARIES.length)
        const isMore = lib === '+ more'
        return (
          <motion.g
            key={`node-${lib}`}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={nodeTransition(i)}
            style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
          >
            <rect
              x={pos.x - D_NODE_W / 2}
              y={pos.y - D_NODE_H / 2}
              width={D_NODE_W}
              height={D_NODE_H}
              rx={D_NODE_H / 2}
              fill={isMore ? PAGE_BG : '#fff'}
              stroke="#121212"
              strokeWidth={1.5}
              strokeDasharray={isMore ? '5 5' : undefined}
              strokeOpacity={isMore ? 0.5 : 1}
            />
            <text
              x={pos.x}
              y={pos.y}
              textAnchor="middle"
              dominantBaseline="central"
              className={isMore ? styles.nodeLabelMore : styles.nodeLabel}
            >
              {lib}
            </text>
          </motion.g>
        )
      })}

      <motion.g
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.circle
          cx={D_CENTER.x}
          cy={D_CENTER.y}
          r={D_CENTER_R}
          fill="#f0ebd1"
          animate={{ r: [D_CENTER_R, D_CENTER_R + 4, D_CENTER_R] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <text x={D_CENTER.x} y={D_CENTER.y - 11} textAnchor="middle" className={styles.centerLabel}>
          Foundations
        </text>
        <text x={D_CENTER.x} y={D_CENTER.y + 13} textAnchor="middle" className={styles.centerSublabel}>
          tokens · icons · assets
        </text>
      </motion.g>
    </svg>
  )
}

/* ── Mobile: folder-tree layout ────────────────────────────────────────
   A single straight line from foundations down through every node reads
   as a chain (foundations → react → ios → android → …), which isn't the
   relationship — every library implements the foundations independently.
   So instead: foundations as a root pill, a trunk down its left edge, and
   a short branch tick from the trunk to each library, like a file tree. */

const M_VIEW_W = 380
const M_VIEW_H = 550
const M_FOUND_W = 260
const M_FOUND_H = 76
const M_FOUND_RX = M_FOUND_H / 2
const M_FOUND_CX = M_VIEW_W / 2
const M_FOUND_CY = 80
const M_FOUND_LEFT = M_FOUND_CX - M_FOUND_W / 2
const M_FOUND_BOTTOM = M_FOUND_CY + M_FOUND_H / 2

// The pill is fully rounded (rx = height/2), so its bottom edge is only
// flat between FOUND_LEFT+rx and FOUND_RIGHT-rx — anywhere inside the
// corner curve, a vertical line dropped from the bottom won't actually
// touch the shape. Anchor the trunk just past the corner, into that flat
// span, so it visibly connects instead of floating below a rounded corner.
const M_TRUNK_X = M_FOUND_LEFT + M_FOUND_RX + 8
const M_BRANCH_LEN = 24
const M_NODE_LEFT = M_TRUNK_X + M_BRANCH_LEN
const M_NODE_W = 220
const M_NODE_H = 42
const M_NODE_CX = M_NODE_LEFT + M_NODE_W / 2
const M_NODE_START_Y = 184
const M_NODE_GAP = 64

function stackPosition(i: number) {
  return { x: M_NODE_CX, y: M_NODE_START_Y + i * M_NODE_GAP }
}

const M_LAST_Y = M_NODE_START_Y + (LIBRARIES.length - 1) * M_NODE_GAP
const M_TRUNK_DURATION = 0.9

function MobileMap() {
  return (
    <svg
      viewBox={`0 0 ${M_VIEW_W} ${M_VIEW_H}`}
      className={styles.svgMobile}
      role="img"
      aria-label="Diagram of shared foundations — tokens, icons and assets — connected to the component libraries that each independently implement them: mds-react, mds-web-components, mds-wordpress, mds-ios, mds-android, and more."
    >
      {/* Trunk: one continuous line the branches tick off from */}
      <motion.line
        x1={M_TRUNK_X}
        y1={M_FOUND_BOTTOM}
        x2={M_TRUNK_X}
        y2={M_LAST_Y}
        stroke="#121212"
        strokeOpacity={0.25}
        strokeWidth={2}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={viewportOnce}
        transition={{ duration: M_TRUNK_DURATION, ease: 'easeOut' }}
      />

      {LIBRARIES.map((lib, i) => {
        const pos = stackPosition(i)
        const branchDelay = (M_TRUNK_DURATION * (pos.y - M_FOUND_BOTTOM)) / (M_LAST_Y - M_FOUND_BOTTOM)
        return (
          <motion.line
            key={`branch-${lib}`}
            x1={M_TRUNK_X}
            y1={pos.y}
            x2={M_NODE_LEFT}
            y2={pos.y}
            stroke="#121212"
            strokeOpacity={0.25}
            strokeWidth={2}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.25, delay: branchDelay, ease: 'easeOut' }}
          />
        )
      })}

      {LIBRARIES.map((lib, i) => {
        const pos = stackPosition(i)
        return (
          <motion.circle
            key={`pulse-${lib}`}
            r={4}
            fill="#121212"
            initial={{ opacity: 0 }}
            animate={{
              cx: [M_TRUNK_X, M_TRUNK_X, M_NODE_LEFT],
              cy: [M_FOUND_BOTTOM, pos.y, pos.y],
              opacity: [0, 0.7, 0],
            }}
            transition={pulseTransition(i)}
          />
        )
      })}

      {LIBRARIES.map((lib, i) => {
        const pos = stackPosition(i)
        const branchDelay = (M_TRUNK_DURATION * (pos.y - M_FOUND_BOTTOM)) / (M_LAST_Y - M_FOUND_BOTTOM)
        const isMore = lib === '+ more'
        return (
          <motion.g
            key={`node-${lib}`}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.4, delay: branchDelay + 0.15, ease: 'easeOut' }}
            style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
          >
            <rect
              x={M_NODE_LEFT}
              y={pos.y - M_NODE_H / 2}
              width={M_NODE_W}
              height={M_NODE_H}
              rx={M_NODE_H / 2}
              fill={isMore ? PAGE_BG : '#fff'}
              stroke="#121212"
              strokeWidth={1.5}
              strokeDasharray={isMore ? '5 5' : undefined}
              strokeOpacity={isMore ? 0.5 : 1}
            />
            <text
              x={pos.x}
              y={pos.y}
              textAnchor="middle"
              dominantBaseline="central"
              className={isMore ? styles.nodeLabelMore : styles.nodeLabel}
            >
              {lib}
            </text>
          </motion.g>
        )
      })}

      {/* Foundations: a rectangular pill like the library nodes, not a circle,
          so it reads as one consistent shape language with the rest of the tree */}
      <motion.g
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ transformOrigin: `${M_FOUND_CX}px ${M_FOUND_CY}px` }}
      >
        <motion.rect
          x={M_FOUND_LEFT}
          y={M_FOUND_CY - M_FOUND_H / 2}
          width={M_FOUND_W}
          height={M_FOUND_H}
          rx={M_FOUND_RX}
          fill="#f0ebd1"
          animate={{ scale: [1, 1.015, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: `${M_FOUND_CX}px ${M_FOUND_CY}px` }}
        />
        <text
          x={M_FOUND_CX}
          y={M_FOUND_CY - 9}
          textAnchor="middle"
          dominantBaseline="central"
          className={styles.centerLabel}
        >
          Foundations
        </text>
        <text
          x={M_FOUND_CX}
          y={M_FOUND_CY + 14}
          textAnchor="middle"
          dominantBaseline="central"
          className={styles.centerSublabel}
        >
          tokens · icons · assets
        </text>
      </motion.g>
    </svg>
  )
}

export default function MdsLibraryMap() {
  return (
    <div className={styles.wrap}>
      <DesktopMap />
      <MobileMap />
    </div>
  )
}
