import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AdminProductsComponent } from './admin-products.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AdminProductsComponent', () => {
	let component: AdminProductsComponent;
	let fixture: ComponentFixture<AdminProductsComponent>;
	let http: HttpTestingController;

	beforeEach(async () => TestBed.configureTestingModule({
		imports: [HttpClientTestingModule, RouterTestingModule],
		declarations: [AdminProductsComponent]
	}).compileComponents())

	beforeEach(() => {
		http = TestBed.get(HttpTestingController);
		fixture = TestBed.createComponent(AdminProductsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create AdminProductsComponent', () => {
		expect(component).toBeTruthy();
	});

	it('should render 2 product in template', (done: DoneFn) => {
		const requestMock = http.expectOne('http://localhost:3000/products');
		requestMock.flush(getProductsData());

		// Act with Assert
		component.products.then((products) => {
			expect(products.length).toBe(2);
			done();
		});
	});

	function getProductsData() {
		return [{
			"id": 1,
			"name": "product 1",
			"description": "product 1 description",
			"price": 100,
			"category": 0,
			"isAvailable": true,
			"createdOn": "Mon, 06 Apr 2020 13:29:39 GMT"
		},
		{
			"id": 2,
			"name": "product 2",
			"description": "product 2 description",
			"price": 200,
			"category": 1,
			"isAvailable": true,
			"createdOn": "Mon, 06 Apr 2020 13:29:39 GMT"
		}]
	}
});