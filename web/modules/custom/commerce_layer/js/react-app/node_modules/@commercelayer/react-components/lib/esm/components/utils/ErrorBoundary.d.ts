import { Component, type ErrorInfo } from 'react';
interface Props {
    children: JSX.Element;
}
interface State {
    hasError: boolean;
}
export declare class ErrorBoundary extends Component<Props, State> {
    state: State;
    static getDerivedStateFromError(): State;
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    render(): JSX.Element;
}
export default ErrorBoundary;
