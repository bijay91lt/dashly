'use client';

import {
    DndContext, 
    closestCenter, 
    KeyboardSensor, 
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
} from '@dnd-kit/core'
import {
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { WidgetId } from '@/types/widget';
import { CLockWidget } from '@/components/widgets/ClockWidget';
import { TodoWidget } from '@/components/widgets/TodoWidget';
import { Weatherwidget } from '@/components/widgets/WeatherWidget';
import { useWidgetLayout } from '@/hooks/useWidgetLayout';
import { useCurrentTime } from '@/hooks/useCurrentTime';

import { SortableWidget } from '../components/SortableWidget'

export function Dashboard (){
    const { layout, moveWidget } = useWidgetLayout();
    const currentTime = useCurrentTime();

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if(!over || active.id === over.id) return ;
        const oldIndex = layout.findIndex((item) => item.id === active.id);
        const newIndex = layout.findIndex((item) => item.id === over.id);
        moveWidget(oldIndex, newIndex);
    };

    const renderWidget = (id: WidgetId) => {
        switch(id) {
            case 'clock':
                return <CLockWidget currentTime={currentTime} />;
            case 'todo':
                return <TodoWidget />;
            case 'weather':
                return <Weatherwidget/>;
            default:
                return null;
        }
    };

    return (
        <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        >
            <SortableContext
                items={layout.map((item) => item.id)}
                strategy={verticalListSortingStrategy}
            >
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {layout.map((item) => (
                        <SortableWidget key={item.id} id={item.id}>
                            {renderWidget(item.id)}
                        </SortableWidget>
                    ))}
                </div>
            </SortableContext>
        </DndContext>
    )
}