import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentAuthorDialogComponent } from './comment-author-dialog.component';

describe('CommentAuthorDialogComponent', () => {
  let component: CommentAuthorDialogComponent;
  let fixture: ComponentFixture<CommentAuthorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentAuthorDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommentAuthorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
