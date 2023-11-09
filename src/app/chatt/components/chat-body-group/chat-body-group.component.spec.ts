import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBodyGroupComponent } from './chat-body-group.component';

describe('ChatBodyGroupComponent', () => {
  let component: ChatBodyGroupComponent;
  let fixture: ComponentFixture<ChatBodyGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatBodyGroupComponent]
    });
    fixture = TestBed.createComponent(ChatBodyGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
