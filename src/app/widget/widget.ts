import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-widget',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
  template: `
    <div class="widget-container">
      <h2>Angular Widget</h2>
      <p>Counter: {{ count() }}</p>
      <p>Double: {{ double() }}</p>
      <div class="widget-actions" role="group" aria-label="Counter controls">
        <button (click)="decrement()" aria-label="Decrement counter">-</button>
        <button (click)="increment()" aria-label="Increment counter">+</button>
        <button (click)="reset()" aria-label="Reset counter">Reset</button>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
      font-family: system-ui, -apple-system, sans-serif;
    }

    .widget-container {
      padding: 1.5rem;
      border: 2px solid #3b82f6;
      border-radius: 0.5rem;
      background: #f8fafc;
      max-width: 320px;
    }

    h2 {
      margin: 0 0 0.75rem;
      color: #1e293b;
      font-size: 1.25rem;
    }

    p {
      margin: 0.25rem 0;
      color: #475569;
    }

    .widget-actions {
      display: flex;
      gap: 0.5rem;
      margin-top: 1rem;
    }

    button {
      padding: 0.5rem 1rem;
      border: 1px solid #cbd5e1;
      border-radius: 0.375rem;
      background: #fff;
      color: #1e293b;
      font-size: 0.875rem;
      cursor: pointer;
      transition: background 0.15s;
    }

    button:hover {
      background: #e2e8f0;
    }

    button:focus-visible {
      outline: 2px solid #3b82f6;
      outline-offset: 2px;
    }
  `,
})
export class Widget {
  protected readonly count = signal(0);
  protected readonly double = computed(() => this.count() * 2);

  protected increment(): void {
    this.count.update((c) => c + 1);
  }

  protected decrement(): void {
    this.count.update((c) => c - 1);
  }

  protected reset(): void {
    this.count.set(0);
  }
}
