import { useState, useRef, useEffect } from 'react'
import { analyzeSkillUsage, extractResumeText } from '../helpers'

export const useSkillAnalysis = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<string>('')
  const [error, setError] = useState<string>('')
  const abortControllerRef = useRef<AbortController | null>(null)

  const analyzeSkill = async (skill: string) => {
    if (!skill.trim()) return

    // Cancel any existing request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }

    // Create new abort controller
    abortControllerRef.current = new AbortController()

    setIsLoading(true)
    setError('')
    setResult('')

    try {
      const resumeText = await extractResumeText()
      const response = await analyzeSkillUsage(
        skill,
        resumeText,
        abortControllerRef.current.signal
      )
      setResult(response.analysis)
    } catch (err) {
      console.log('Err 😃', (err as Error).message)

      if (err instanceof Error && err.name === 'AbortError') {
        console.log('Request cancelled')
      } else {
        setError(err instanceof Error ? err.message : 'Failed to analyze skill')
      }
    } finally {
      setIsLoading(false)
      abortControllerRef.current = null
    }
  }

  const cancelRequest = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
      abortControllerRef.current = null
    }
    setIsLoading(false)
    setResult('')
    setError('')
  }

  const reset = () => {
    setResult('')
    setError('')
    setIsLoading(false)
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
    }
  }, [])

  return {
    analyzeSkill,
    cancelRequest,
    reset,
    isLoading,
    result,
    error,
  }
}
