export interface PromiseUseCase<RESULT> {
  execute: () => Promise<RESULT>
}
