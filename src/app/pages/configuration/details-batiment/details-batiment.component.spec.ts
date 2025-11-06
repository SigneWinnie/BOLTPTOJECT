import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBatimentComponent } from './details-batiment.component';

describe('DetailsBatimentComponent', () => {
  let component: DetailsBatimentComponent;
  let fixture: ComponentFixture<DetailsBatimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsBatimentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsBatimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
