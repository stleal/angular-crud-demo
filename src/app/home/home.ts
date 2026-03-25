import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CurrencyPipe, DecimalPipe, SlicePipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PropertyService } from '../property';
import { PropertyModel } from '../models/property';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CurrencyPipe, DecimalPipe, SlicePipe, MatButtonModule, MatCardModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly propertyService = inject(PropertyService);

  protected readonly properties = toSignal(this.propertyService.getProperties(), {
    initialValue: [] as PropertyModel[],
  });

  protected readonly featuredProperties = computed(() => this.properties().slice(0, 3));

  protected readonly hasFeaturedProperties = computed(() => this.featuredProperties().length > 0);

  protected getPrimaryImageUrl(property: PropertyModel): string {
    return property.propertyImages.find((image) => image.isPrimary)?.imageUrl
      ?? property.propertyImages[0]?.imageUrl
      ?? 'https://picsum.photos/id/1015/900/600';
  }
}
